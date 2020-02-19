export class LocationChanger {
  currentId = 0;
  changeSelection: (id: string) => void;

  constructor(changeSelection: (id: string) => void) {
    this.changeSelection = changeSelection;
  }

  init = (): void => {
    this.setEventListenersForAllCities();
  };

  handleCityClick = (id: string) => (e: any): void => {
    this.changeSelection(id);
    e.stopPropagation();
  };

  setEventListenersForAllCities = (): void => {
    const cities = document.getElementsByClassName('city');
    for (let i = 0; i < cities.length; i++) {
      const city = cities.item(i);
      if (!city) throw new Error();
      const id = city.id;
      console.log(id);
      cities.item(i)?.addEventListener('click', this.handleCityClick(id));
    }
  };
}

export default LocationChanger;
