import { Skeleton } from "@mui/material"

// eslint-disable-next-line react/prop-types
const RepeatComponent = ({times, render: renderCallback}) => {
    return (
        <>
            {Array.from({length: times}).map((_, index) => 
                renderCallback(index)
            )}
        </>
    )
}

const Loading = () => {
  return (
    <RepeatComponent 
        times={3}
        render={(index) => (
            <div className="tweet-container" style={{padding: "1rem"}} key={index}>
                <Skeleton variant="rounded" width="80px" height="20px" style={{backgroundColor: "gray", marginBottom: "22px"}} />
                <Skeleton variant="rounded" width="96%" height="120px" style={{backgroundColor: "gray"}}/>
            </div>
        )}
    />
  )
}

export default Loading