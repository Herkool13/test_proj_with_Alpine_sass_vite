// -------style---------
import './styles/style.scss';
// -----package & module-----
import Alpine from 'alpinejs'
window.Alpine = Alpine
import dropdown from './dropdown.js'
 
Alpine.data('dropdown', dropdown)
Alpine.start()

