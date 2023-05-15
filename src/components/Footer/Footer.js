function Footer(props) {
    console.log(props);
    return (
        <footer>
            <p>Copyright {props.name}'s Amazing Idea {props.year}</p>
        </footer>
    )
}

export default Footer;