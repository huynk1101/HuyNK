import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#F4F4F4',
		width: '100%',
		height: '100%'
	},
  
  header: {
    backgroundColor: '#189EFF',
    flexDirection: 'row'
  },

  iconSearch: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
  },

  iconMenu: {
    marginTop: 15,
    marginLeft: 15
  },

  iconCart: {
    marginTop: 15
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#189EFF',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    width: '70%',
    marginVertical: 10,
    marginHorizontal: 15,
		
	},
	
	inputSearch: {
		flex: 1
	},

	location: {
    flexDirection: 'row',
		backgroundColor: '#1D71AB',
		height: 40,
		alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10
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
    flex: 1
  },

  itemCat: {
    margin: 10,
    alignItems: 'center',
  },
  
  seeAllCategory: {
    height: 30,
    width: 100,
    backgroundColor: '#189EFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

	listService: {
		backgroundColor: '#131C60',
    height: 150,
    color: '#FFFFFF'
  },
  
  register: {
    height: 30,
    width: 100,
    backgroundColor: '#189EFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  login: {
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4011A'
  },

  authentication: {
    height: 100,
    marginTop: 10,
  }
  
});
export default styles;