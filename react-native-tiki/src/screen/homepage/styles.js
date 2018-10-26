import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#189EFF',
		width: '100%',
		height: '100%'
	},
  
  iconSearch: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'center'
  },

  iconCart: {
    justifyContent: 'flex-end'
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    marginVertical: 10,
    marginHorizontal: 60,
		
	},
	
	inputSearch: {
		flex: 1
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
		width: '100%',
		height: 120
	},

	banner_event: {
		marginVertical: 10,
		width: '100%',
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