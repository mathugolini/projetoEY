import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; // Certifique-se de importar corretamente
import Everymindassets from '@salesforce/resourceUrl/Everymindassets';

export default class Home extends NavigationMixin(LightningElement) {

    everymindlogo = `${Everymindassets}/EYassets/everymind.png`;
    @track menuItems = [
        { id: 'item1', link: 'https://www.everymind.com.br/?utm_source=ISG&utm_medium=LandingPage%20&utm_id=Institucional%20', icon: `${Everymindassets}/EYassets/matheusLogo.png`, style: '' },
        { id: 'item2', link: '#', icon: 'icon2.png', style: '' },
        { id: 'item3', link: '#', icon: 'icon3.png', style: '' },
        { id: 'item4', link: '#', icon: 'icon4.png', style: '' },
        { id: 'item5', link: '#', icon: 'icon5.png', style: '' },
        { id: 'item6', link: '#', icon: 'icon6.png', style: '' },
    ];

    isExpanded = false;

    handleCheckboxChange(event) {
        this.isExpanded = event.target.checked;

        this.menuItems = this.menuItems.map((item, index) => {
            if (this.isExpanded) {
                const angle = (Math.PI * 2 * index) / this.menuItems.length;
                const x = Math.cos(angle) * 100; // Radius
                const y = Math.sin(angle) * 100; // Radius
                return {
                    ...item,
                    style: `transform: translate3d(${x}px, ${y}px, 0);`,
                };
            } else {
                return {
                    ...item,
                    style: 'transform: translate3d(0, 0, 0);',
                };
            }
        });
    }

    handleMenuItemClick() {
        
        const clickedItemId = event.target.dataset.itemId;
        if (clickedItemId === 'item1') {
            // Redirecionar para a página desejada na mesma janela
            window.open("https://www.everymind.com.br/?utm_source=ISG&utm_medium=LandingPage%20&utm_id=Institucional%20","_blank");
        } 
    
}
}