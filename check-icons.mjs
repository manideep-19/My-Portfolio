import * as lucide from 'lucide-react';
const icons = ['Github', 'Linkedin', 'Mail', 'ChevronDown', 'Terminal', 'Smartphone', 'Globe', 'Database', 'Shield', 'Bot', 'HeartPulse', 'ShoppingCart', 'MessageSquare', 'Bus', 'CreditCard', 'Video', 'Leaf', 'BrainCircuit', 'Activity', 'UserCheck', 'Code'];
const missing = icons.filter(i => !lucide[i]);
console.log('Missing icons:', missing);
