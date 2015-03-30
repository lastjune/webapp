var React=require('react');
var mui=require('material-ui');
var Paper=mui.Paper;
var AppBar=mui.AppBar;


var Memo=React.createClass({displayName: "Memo",
	getInitialState:function(){
		return ;
	},
	render:function(){
		return (
			React.createElement(Paper, null, 
				React.createElement(AppBar, {displayTitle: this.props.data.displayTitle}
				), 
				React.createElement(TextField, {multiline: true}, 
				this.props.data.text
				)
			)
		);
	}	
});
module.exports=Memo;
