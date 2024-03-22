import {Avatar as AntdAvatar, AvatarProps} from 'antd'

type Props = AvatarProps & {
    name: string
}

const CustomAvatar = ({name , style , ...rest}: Props ) => {
  return (
      <AntdAvatar
        alt={"John Doe"}
        size="default"
        style={{
          backgroundColor: '#87d068',
          display: "flex",
          alignItems: "center",
          border: "none"
        }}
      >
        
      </AntdAvatar>
    )
}

export default CustomAvatar