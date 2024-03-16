import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const newList = itemList.map((item) => (
      <li key={item.id}>
        {item.name.toUpperCase()}:&nbsp;<b>{item.calories}</b>&nbsp;cal.
      </li>
    ));

    return (
      <>
        <h2>{category}</h2>
        <ol>{newList}</ol>
      </>
    );
}

List.defaultProps = {
    items: [],
    category: "Category"
};

List.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.number, 
        name: PropTypes.string, 
        calories: PropTypes.number })),
    category: PropTypes.string
};

export default List;
