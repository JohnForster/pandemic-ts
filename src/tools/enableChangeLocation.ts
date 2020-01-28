export class LocationChanger {
  currentId = 0;
  changeSelection: (n: number) => void;

  constructor(changeSelection: (n: number) => void) {
    this.changeSelection = changeSelection;
  }

  init = () => {
    this.setEventListenersForAllCities();
  };

  handleCityClick = (id: number) => (e: any) => {
    this.changeSelection(id);
    e.stopPropagation();
  };

  setEventListenersForAllCities = () => {
    const cities = document.getElementsByClassName('city');
    for (let i = 0; i < cities.length; i++) {
      const city = cities.item(i);
      if (!city) throw new Error();
      const id = Number(city.id);
      console.log(id);
      cities.item(i)?.addEventListener('click', this.handleCityClick(id));
    }
  };

  //   const handleBoardClick = (id: number) => (e: MouseEvent) => {
  //     if(!props.dev.selectedId) return
  //     const x = Math.round(e.pageX / window.innerWidth * 100)
  //     const y = Math.round(e.pageY / (window.innerWidth * 0.51375687843) * 100)
  //     changeLocation(id, {x, y})
  //     console.log(x, y)
  //   }
  // }
}

export default LocationChanger;
