import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selectedPage: Profile(),
    id: 'profile'
  }

  handlePage = (e) => {
    if (e.target.id === "profile") {
      this.setState({
        selectedPage: Profile(),
        id: 'profile'

      })
    } else if (e.target.id === "photo") {
      this.setState({
        selectedPage: Photos(),
        id: 'photo'

      })

    } else if (e.target.id === "cocktail") {
      this.setState({
        selectedPage: Cocktails(),
        id: 'cocktail'

      })

    } else {
      this.setState({
        selectedPage: this.state.pokemon,
        id: 'pokemon'
      })
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected.

    Which component should have state?
    MainBox
    Which component should have methods to control state?
    MainBox
    Where should these methods be called?
    MenuBar
<MenuBar onChange={this.handlePage} selectedPage={this.state.selectedPage}/>
    */

    const detailsToDisplay = <div>{this.state.selectedPage}</div>

    return (
      <div>
        <MenuBar handleClick={this.handlePage} activeStatus={this.state.id}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
