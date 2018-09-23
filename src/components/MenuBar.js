import React from 'react'

const MenuBar = (props) => {
  /*
  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */

  console.log(props.activeStatus, typeof (props.activeStatus))

  let profileStatus =  props.activeStatus === 'profile' ? 'active' : null
  let photoStatus =  props.activeStatus === 'photo' ? 'active' : null
  let cocktailStatus =  props.activeStatus === 'cocktail' ? 'active' : null
  let pokemonStatus =  props.activeStatus === 'pokemon' ? 'active' : null

  return (
    <div className="ui four item menu">
      <a className={`item ${profileStatus}`} id="profile" onClick={props.handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={`item ${photoStatus}`} id="photo" onClick={props.handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={`item ${cocktailStatus}`} id="cocktail" onClick={props.handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={`item ${pokemonStatus}`} id="pokemon" onClick={props.handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar


// import React, { Component } from 'react'
//
// class MenuBar extends Component {
//
//   handlePageActive = (e) => {
//     // e.target.id should be passed up to the parent
//     this.props.onChange(e.target.id)
//   }
//
//   /*
//
//   The 'a' tags below are the menu items. Think about the way a menu
//   should work. When you click a menu item, the button typically becomes
//   'active' to indicate that it is currently selected.
//   How could we achieve this programatically?
//
//   What other behavior do we expect when we click on a menu item?
//
//   Do we need state in this component, and if not, how can this component be made aware of what is currently the active menu item?
//
//   */
//   render() {
//   return (
//     <div className="ui four item menu">
//       <a className="item active" id="profile" onClick={this.handlePageActive}>
//         <i className="user large icon" id="profile"/>
//       </a>
//
//       <a className="item" id="photo" onClick={this.handlePageActive}>
//         <i className="photo large icon" id="photo"/>
//       </a>
//
//       <a className="item" id="cocktail" onClick={this.handlePageActive}>
//         <i className="cocktail large icon" id="cocktail"/>
//       </a>
//
//       <a className="item" id="pokemon" onClick={this.handlePageActive}>
//         <i className=" themeisle large icon" id="pokemon"/>
//       </a>
//     </div>
//   )
//
// }
// }
// export default MenuBar
