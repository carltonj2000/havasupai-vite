function App() {
	return (
		<>
			<div className="bg-indigo-300 opacity-90 px-1 py-3 flex flex-col items-center">
				<div className="flex gap-3">
					<h1 className="text-2xl font-semibold">Havasupai Trip</h1>
					<img src="/waterfall.svg" width="24" />
				</div>
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
									<li>2 AM Drive From Caverns</li>
									<li>4 AM hike down to Campground</li>
									<li>Mooney &amp; Havasu Falls</li>
									<li>12 miles</li>
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
									<li>50 foot falls &amp; Hidden &amp; Secret Falls</li>
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
									<li>Dry bags/keg</li>
									<li>Puffy Jacket</li>
									<li>Swimming Suit</li>
									<li>Toiletries</li>
									<li>First aid</li>
									<li>Soap</li>
									<li>Lights</li>
									<li>Face Sun Screen</li>
									<li>Body Sun Screen</li>
									<li>Lip Balm</li>
									<li>Nylon Cord</li>
									<li>Garbage Bag</li>
									<li>External Battery</li>
									<li>Towel</li>
									<li>Floats</li>
									<li>Tripod</li>
									<li>Hat</li>
								</ul>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Water Filter</li>
									<li>Water Pack</li>
									<li>Snacks</li>
									<li>Electrolytes</li>
									<li>Oat Meal x12</li>
									<li>Power Bars</li>
									<li>Small Shovel</li>
									<li>Stove And Fuel</li>
									<li>Utensils</li>
									<li>Sun Hat</li>
									<li>Soap</li>
									<li>Moisturizer</li>
									<li>Floss</li>
									<li>Tooth Brush</li>
									<li>Tooth Paste</li>
								</ul>
							</td>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>Large Pack</li>
									<li>Small Pack</li>
									<li>Sleeping Bag</li>
									<li>Tent</li>
									<li>Mattress</li>
									<li>Pillow</li>
									<li>Rain Jacket</li>
									<li>Water Shoes</li>
									<li>underwear</li>
									<li>tops</li>
									<li>long pant</li>
									<li>shorts</li>
									<li>shocks</li>
									<li>Insect Repellent</li>
									<li>Mirror</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<h2 className="font-semibold mt-3 mb-2 text-xl">Etc</h2>
				<table className="pt-2 border-collapse border border-blue-800">
					<tbody>
						<tr>
							<td className="border border-blue-400 px-2 py-1">
								<ul>
									<li>
										<a href="/trailmap.webp" className="underline text-slate-800">
											Map
										</a>
									</li>
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
