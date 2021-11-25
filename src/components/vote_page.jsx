export default function VotePage() {

    function onSubmit(e) {
        e.preventDefault();

        console.log('voted');
    }

    return (
        <div style={{ flex: 'display', flexDirection: 'row' }}>
            <form onSubmit={onSubmit}>
                <input type="radio" id="huey" name="vote" value="SFI"
                    checked />
                <label for="huey">Party1</label>
                <input type="radio" id="huey" name="vote" value="KSU"
                    checked />
                <label for="huey">Party2</label>
                <input type="radio" id="huey" name="vote" value="ABVP"
                    checked />
                <label for="huey">Party3</label>
                <button style={{ height: 75, width: 150, fontSize: 22 }} onClick={onSubmit}>
                    Cast Vote
                </button>
            </form>
        </div>
    )
}