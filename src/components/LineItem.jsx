import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
            />
            <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
            >
                {item.item}
            </label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    );
};

export default LineItem;
