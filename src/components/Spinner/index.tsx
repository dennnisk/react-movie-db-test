import {Wrapper} from './Spinner.styles';

type Props = {
  smaller?: boolean
}

const Spinner: React.FC<Props> = ({smaller}) => {
  return (
    <Wrapper smaller={smaller}></Wrapper>
  )
};

export default Spinner;