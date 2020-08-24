import styled from 'styled-components'
import { SFlex, SFlexItem } from 'components/Styled'
import {
  FacebookSquare,
  Instagram,
  Twitter,
  Youtube
} from '@styled-icons/boxicons-logos'

const SSocial = styled.div`
  display: flex;
  width: 100%;
  > ${SFlex} {
    > ${SFlexItem} {
    }
  }
`

const Social: React.FC<SocialProps> = ({
  facebook,
  instagram,
  twitter,
  youtube
}) => (
  <SSocial>
    <SFlex spacing="small" isAuto>
      {facebook && (
        <SFlexItem>
          <FacebookSquare />
        </SFlexItem>
      )}
      {instagram && (
        <SFlexItem>
          <Instagram />
        </SFlexItem>
      )}
      {twitter && (
        <SFlexItem>
          <Twitter />
        </SFlexItem>
      )}
      {youtube && (
        <SFlexItem>
          <Youtube />
        </SFlexItem>
      )}
    </SFlex>
  </SSocial>
)

interface SocialProps {
  facebook?: string
  instagram?: string
  twitter?: string
  youtube?: string
}

export default Social
export { SSocial }
