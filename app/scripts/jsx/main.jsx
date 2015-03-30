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
var tempComponent = React.createClass({
    render: function() {
        return (
			<AppCanvas>
			<Paper>
				<Paper float='left'>
				<div>
				<div id='left' float='left'>
					<h2 className="mui-font-style-header">D2C</h2>
					</div>
					<div id='right' float='right'>
					<TextField id='headerSearch' placeholder='type to search' float='right'/>	
					<FlatButton label='Search' float='right' primary={true}/>
					</div>
				</div>
				</Paper>
			</Paper>
				<Toolbar>
					<ToolbarGroup key = { 0 } float = "left">
						<DropDownMenu menuItems={filterOptions} />
					</ToolbarGroup>
					<ToolbarGroup key = { 1 } float = "right">
						<FontIcon className = "muidocs-icon-custom-pie" />
						<FontIcon className = "muidocs-icon-custom-sort" />
						<DropDownIcon iconClassName = "muidocs-icon-navigation-expand-more" menuItems = { iconMenuItems }/>
						<span className = "mui-toolbar-separator">&nbsp;</span>
						<RaisedButton label = "Search" primary = { true } />
					</ToolbarGroup>
				</Toolbar>
			<Memo displayTitle={'Client'} text={'123'}	/>
			</AppCanvas>
        );
    }
});
module.exports = tempComponent;
