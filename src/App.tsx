function App() {
	return (
		<>
			<div className="bg-indigo-300 opacity-90 px-1 py-3 flex flex-col items-center">
				<h1 className="text-2xl font-semibold">Havasupai Trip</h1>
				<p>
					August 29<sup>th</sup> - September 2<sup>nd</sup>, 2025
				</p>
			</div>
			<div className="bg-indigo-200 opacity-90 flex flex-col items-center pt-4">
				<h2 className="font-semibold mb-2 mt-3 text-xl">Plan</h2>
				<table>
					<thead>
						<tr>
							<th className="border border-blue-400 px-2 py-1 font-semibold">
								Day
							</th>
							<th className="border border-blue-400 px-2 py-1">Activity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								Friday<br />August 29<sup>th</sup>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>5-6PM meet @</li>
									<li>
										<a href="https://maps.app.goo.gl/DSv4J2CNmCcDc1Wt5?g_st=ic" className="underline text-slate-800">
											Grand Canyon Caverns Campground
										</a>
									</li>
									<li>
										<a href="https://gccaverns.com/rv-park-campground" className="underline text-slate-800">
											Book Room Here
										</a>
									</li>
									<li>Wifi - GCC_MOTEL, AGCCMotel4</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								Saturday<br />August 30<sup>th</sup>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>2 AM Drive From Caverns Campground</li>
									<li>4 AM hike down to Havasupai Campground - 10 miles</li>
									<li>Mooney Fall &amp; Havasu Falls - 12 miles</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								Sunday<br />August 31<sup>st</sup>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Beaver Falls</li>
									<li>To Colorado River - 18 miles</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								Monday<br />September 1<sup>st</sup>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Explore Caves and Mines</li>
									<li>Upper &amp; Lower Navajo Falls</li>
									<li>50 foot falls and Hidden &amp; Secret Falls</li>
									<li>6-8 Miles</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								Tuesday<br />September 2<sup>nd</sup>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Hike back up to the Hilltop</li>
									<li>Early morning or late to avoid heat</li>
									<li>12 miles</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<h2 className="font-semibold mt-3 mb-2 text-xl">Equipment</h2>
				<table className="pt-2 border-collapse border border-blue-800">
					<tbody>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Large Pack</li>
									<li>Small Pack</li>
									<li>Drinking Water</li>
									<li>Snacks</li>
									<li>Rain Jacket</li>
									<li>Water Shoes</li>
									<li>Dry bags/keg</li>
									<li>Swimming Suit</li>
									<li>Puffy Jacket</li>
								</ul>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Rain Jacket</li>
									<li>Snacks</li>
									<li>Electrolytes</li>
									<li>Toiletries</li>
									<li>First aid</li>
									<li>Lights</li>
									<li>Utensils</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="bg-indigo-200 opacity-90 h-full"></div>
		</>
	);
}

export default App;
