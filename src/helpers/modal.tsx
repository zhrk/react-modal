import EventEmitter from '../services/EventEmitter';

export const openModal = (content: JSX.Element) => EventEmitter.emit('openModal', content);
