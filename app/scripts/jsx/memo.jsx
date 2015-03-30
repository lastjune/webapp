var React=require('react');
var mui=require('material-ui');
var Paper=mui.Paper;
var AppBar=mui.AppBar;


var Memo=React.createClass({
	getInitialState:function(){
		return ;
	},
	render:function(){
		return (
			<Paper>
				<AppBar displayTitle={this.props.data.displayTitle}>
				</AppBar>
				<TextField multiline={true}>
				{this.props.data.text}
				</TextField>
			</Paper>
		);
	}	
});
module.exports=Memo;
