import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow 
            projectId='c6b77625-6d32-405c-bb71-bb07b08ab537'
            // eslint-disable-next-line react/prop-types
            username={props.user.username}
            // eslint-disable-next-line react/prop-types
            secret={props.user.secret}
            style = {{ height: '100%' }}
            />

        </div>
    ) ;
}
 
export default ChatsPage;