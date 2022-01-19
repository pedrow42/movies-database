import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useState, useEffect } from "react"
import { api } from "../api"
import { GenreType } from "../types/GenreType"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavigateBar = () =>{

    const [genreList, useGenreList] = useState<GenreType[]>([]);

    useEffect(() => {
        loadGenres()
    }, [])

    const loadGenres = async ()=>{
        let json = await api.getAllGenres()
        useGenreList(json)
    }

    const navigate = useNavigate()

    const handleHomeButton = () =>{
        navigate('/')
    }

    return(
        <Navbar bg="light" expand="lg" className="mb-5">
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navLink" onClick={handleHomeButton}>Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        {genreList.map((item, index)=>(
                            <Link to={`/movies/${item.name.toLowerCase()}/${item.id}`} key={index} className="link--element">
                                <NavDropdown.Item href="#action/3.1">{item.name}</NavDropdown.Item>
                            </Link>
                        ))}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}