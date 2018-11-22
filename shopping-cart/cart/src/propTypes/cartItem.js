import PropType from 'prop-types'
import ProductPropType from './product'

export default PropType.shape({
  item: ProductPropType,
  quantity: PropType.number,
})
