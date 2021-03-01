import PropTypes from 'prop-types'
import Button from './Buttons';
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  
    const location = useLocation()
    return (

        
        
        <header className='header'>
            <h1 >{title}</h1>

           {location.pathname==='/' && (<Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />)}
            
        </header>
    )
}

// CSS in JS
// const headingStyle={
//     color:'red', 
//     backgroundColor: 'green'
// }


Header.defaultProps = {
    title:'task tracker default',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header
