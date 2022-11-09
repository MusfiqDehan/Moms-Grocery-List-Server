const today = new Date();

const Footer = ({ totalItems }) => {
    return (
        <footer className="footer">
            <p>
                Total {totalItems} List {totalItems === 1 ? "Item" : "Items"}
            </p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    );
};

export default Footer;
