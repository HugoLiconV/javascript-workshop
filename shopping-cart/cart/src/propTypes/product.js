import PropTypes from 'prop-types'

export default {
  Product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
    onAdd: PropTypes.func.isRequired,
}
