import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StarIcon = () => <FontAwesomeIcon icon={faStar} />
const Stars = (props) => <span className={props.colored ? "text-5star" : ""}>
  {props.stars ? [...Array(props.stars).keys()].map((_, i) => <StarIcon key={i} />) : null}
</span>

export {
  StarIcon,
  Stars
}