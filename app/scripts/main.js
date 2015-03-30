var React = require('react/addons');
var Mui = require('material-ui');
var Memo=require('./memo.js');
console.log(Mui);
var FlatButton = Mui.FlatButton;
var AppBar = Mui.AppBar;
var RaisedButton = Mui.RaisedButton;
var FontIcon = Mui.FontIcon;
var TextField = Mui.TextField;
var AppCanvas = Mui.AppCanvas;
var Toolbar = Mui.Toolbar;
var ToolbarGroup = Mui.ToolbarGroup;
var DropDownMenu=Mui.DropDownMenu;
var DropDownIcon=Mui.DropDownIcon;
var Paper=Mui.Paper;
//var tempComponent = React.createClass({
//    render: function() {
//        return (
//		<AppCanvas>
//
//			<AppBar className='mui-dark-theme' title='D2C' showMenuIconButton={false}>
//			<TextField id='search' placeholder='Search' float='right'></TextField>
//			<FlatButton label="Search" float='right'></FlatButton>
//			</AppBar>
//		</AppCanvas>
//        );
//    }
//});
var filterOptions = [{
    payload: '1',
    text: 'Client'
}, {
    payload: '2',
    text: 'Quote'
}, {
    payload: '3',
    text: 'Billing'
} ];
var iconMenuItems = [{
    payload: '1',
    text: 'Download'
}, {
    payload: '2',
    text: 'More Info'
}];
var tempComponent = React.createClass({displayName: "tempComponent",
    render: function() {
        return (
			React.createElement(AppCanvas, null, 
			React.createElement(Paper, null, 
				React.createElement(Paper, {float: "left"}, 
				React.createElement("div", null, 
				React.createElement("div", {id: "left", float: "left"}, 
					React.createElement("h2", {className: "mui-font-style-header"}, "D2C")
					), 
					React.createElement("div", {id: "right", float: "right"}, 
					React.createElement(TextField, {id: "headerSearch", placeholder: "type to search", float: "right"}), 	
					React.createElement(FlatButton, {label: "Search", float: "right", primary: true})
					)
				)
				)
			), 
				React.createElement(Toolbar, null, 
					React.createElement(ToolbarGroup, {key:  0, float: "left"}, 
						React.createElement(DropDownMenu, {menuItems: filterOptions})
					), 
					React.createElement(ToolbarGroup, {key:  1, float: "right"}, 
						React.createElement(FontIcon, {className: "muidocs-icon-custom-pie"}), 
						React.createElement(FontIcon, {className: "muidocs-icon-custom-sort"}), 
						React.createElement(DropDownIcon, {iconClassName: "muidocs-icon-navigation-expand-more", menuItems:  iconMenuItems }), 
						React.createElement("span", {className: "mui-toolbar-separator"}, " "), 
						React.createElement(RaisedButton, {label: "Search", primary:  true })
					)
				), 
			React.createElement(Memo, {displayTitle: 'Client', text: '123'}	)
			)
        );
    }
});
module.exports = tempComponent;
