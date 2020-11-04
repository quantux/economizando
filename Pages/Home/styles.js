import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 20,
    },
  
    header: {
      justifyContent: 'center',
      color: '#fff',
    },
  
    total: {
      backgroundColor: '#fff',
      alignItems: 'center',
      width: '95%',
      borderRadius: 10,
      height: 350,
      paddingTop: 20
    },
  
    total_str: {
      color: '#000',
      fontSize: 40,
      fontWeight: 'bold',
    },
  
    total_value: {
      color: 'red',
      fontSize: 70,
      marginTop: 100,
    },
  
    add_despesa: {
      flexDirection: 'row',
      marginTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      width: '95%',
      borderRadius: 10,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
    },
  
    add_despesa_txt: {
      textTransform: 'uppercase',
      paddingLeft: 10,
    },
  
    detalhes: {
      marginTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      width: '95%',
      borderRadius: 10,
      height: 300,
    },
  
    detalhes_txt: {
      marginTop: 20,
      fontWeight: 'bold'
    },
      
    row: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },

    edit: {
        color: 'red',
    }

});

export default styles;