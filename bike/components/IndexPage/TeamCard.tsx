const TeamCard = ({card, isExpanded, expandedCard}: any) => {
    return (
        <div>
            <p>Team card</p>
            <p></p>
            {isExpanded ? (
        <p>Hello</p>
      ) : (
        <button onClick={() => expandedCard()}>Expand card</button>
      )}
        </div>
    )
}

export default TeamCard