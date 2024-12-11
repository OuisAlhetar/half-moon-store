import React from "react";

const StoreFeatures = () => {
	return (
		<div className="container" style={{ direction: "ltr" }}>
			<div className="row">
				<div
					id="store-features"
					className="col-lg-6 col-md-8 offset-lg-3 offset-md-2"
				>
					<h3 className="text-center heading">مميزات المتجر</h3>
					<div className="row">
						<div className="col-4 text-center feature">
							<img src="/images/feature_1.png" alt="feature_1" />
							<div>التوصيل المجاني</div>
						</div>
						<div className="col-4 text-center feature">
							<img src="/images/feature_2.png" alt="feature_2" />
							<div>ضمان المنتج سنة</div>
						</div>
						<div className="col-4 text-center feature">
							<img src="/images/feature_3.png" alt="feature_3" />
							<div>استرجاع المنتج</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreFeatures;
