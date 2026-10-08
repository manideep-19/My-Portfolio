// High-performance Web Audio API Synthesizer for Mechanical Haptics
// 100% self-contained, zero external audio asset dependencies, zero network latency.

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    
    // Check localStorage preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('manideep_audio_muted');
      if (saved !== null) {
        this.muted = saved === 'true';
      }
    }
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('manideep_audio_muted', String(this.muted));
    }
    return this.muted;
  }

  setMuted(val) {
    this.muted = Boolean(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('manideep_audio_muted', String(this.muted));
    }
  }

  // Crisp mechanical tactile switch click
  playClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.04);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch {
      // AudioContext policy gracefully handled
    }
  }

  // Subtle cyber hover blip
  playHover() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(840, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.025);

      gain.gain.setValueAtTime(0.03, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.025);
    } catch {
      // AudioContext policy gracefully handled
    }
  }

  // Dual tone success chime
  playSuccess() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      
      // Note 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, t); // D5
      gain1.gain.setValueAtTime(0.1, t);
      gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(t);
      osc1.stop(t + 0.12);

      // Note 2
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, t + 0.08); // A5
      gain2.gain.setValueAtTime(0.12, t + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(t + 0.08);
      osc2.stop(t + 0.28);
    } catch {
      // AudioContext policy gracefully handled
    }
  }

  // Telemetry chirp (for data flow simulation steps)
  playChirp(stepIndex = 0) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const baseFreq = 500 + stepIndex * 150;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.linearRampToValueAtTime(baseFreq + 200, t + 0.06);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.06);
    } catch {
      // Gracefully handle
    }
  }
}

export const sound = new SoundEngine();
