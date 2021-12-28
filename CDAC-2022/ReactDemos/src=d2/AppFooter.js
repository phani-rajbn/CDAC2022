import './AppFooter.css'
export default function AppFooter(props) {
    console.log(props)
    return (
        <div class="app-footer">
            <hr/>
            <p>Props is a built in object provided by React to represents inputs to be given as attributes to this tag called AppFooter when it is used in the App file.</p>
            <p>&copy; All Rights Reserved under -{props.company}-{props.year}</p>
        </div>
    )
}

