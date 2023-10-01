export default function Main() {
    let websiteName = "Node.js";
    let operatingSystems = ["Windows", "MacOS", "Linux"]
    let versions = [18.18, 20.18]
    
    function great(){
        return "® is an open-source, cross-platform JavaScript runtime environment."
    }
    return (
        <main>
            <h3>
                {websiteName}{great()}
            </h3>
            <div>
            <h1>Download for {operatingSystems[0]} (x64)</h1>
            <button type="button" className="btn btn-primary">
                 {versions[0]} LTS<br/><br/>
            <span>{versions[0]<= 20.18 ? "Latest" : "Current"}</span>
            </button>
            <button type="button" className="btn btn-primary">
                {versions[1]} Current<br/><br/>
                <span>{versions[0]<= 20.18 ? "Current" : "Latest"}</span>
                </button>
            <h4>For information about supported releases, see the release schedule.</h4>
       
            </div>
         </main>
    )
}