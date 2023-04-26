function HistoryTab(){
    return <div className="history-container">
        <span className="history-heading">Purchase Property</span>
        <div className="purchased-properties d-flex">
            <div className="property-container d-flex">
                <div className="property-image">
                    <img src="src/assets/property-image-one.png" alt="" />
                </div>
                <div className="property-info">
                    <span className="property-name">Terraced Property b Switched Construction</span>
                    <span className="property-price">$95,000</span>
                </div>
            </div>
        </div>
    </div>
}

export default HistoryTab;