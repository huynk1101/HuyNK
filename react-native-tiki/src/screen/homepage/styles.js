import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		height: '100%'
	},

  search: {
		backgroundColor: '#189EFF',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	
	inputSearch: {
		backgroundColor: '#FFFFFF',
		width: '70%',
		height: 40,
		borderRadius: 3,
		shadowColor: '#626262',
		shadowOffset: {
			width: 1,
			height: 2,
		}
	},

	location: {
		backgroundColor: '#1D71AB',
		height: 40,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	
	textLocaltion: {
		fontSize: 11,
		color: '#FFFFFF'
	},

	banner: {
		backgroundColor: '#E4E4E4',
		height: 120
	},

	event: {
		backgroundColor: '#F5F5F5',
		height: 100
	},

	listCategory: {
		backgroundColor: '#FFFFFF'
	},

	listService: {
		backgroundColor: '#131C60',
		height: 90
	}
});
export default styles;