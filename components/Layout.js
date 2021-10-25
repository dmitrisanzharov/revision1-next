import Nav from './Nav'
const Layout = ({children}) => {
    return (
        <div>
            <h1>Title that appears on every page</h1>
            <p>para that appears on everypage</p>
            <hr />
            <Nav />
            {children}
        </div>
    )
}

export default Layout
