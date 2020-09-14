const d = document,
	n = navigator,
	ua = n.userAgent;

export const devicesDetected = () => {
	const versionNavegador = d.getElementById("navegador--version"),
		plataforma = d.getElementById("navegador--so"),
		navegador = d.getElementById("navegador"),
		isMobile = {
			android: () => ua.match(/android/i),
			ios: () => ua.match(/iphone|ipad|ipod/i),
			wp: () => ua.match(/windows phone/i),
			any: function () {
				return this.android() || this.ios() || this.wp();
			}
		},
		isDesktop = {
			linux: () => ua.match(/linux/i),
			mac: () => ua.match(/mac os/i),
			windows: () => ua.match(/windows nt/i),
			any: function() {
				return this.windows() || this.mac() || this.linux() 
			}
		},
		isBrowser = {
			chrome: () => ua.match(/chrome/i),
			edge: () => ua.match(/edge/i),
			firefox: () => ua.match(/firefox/i),
			safari: () => ua.match(/safari/i),
			opera: () => ua.match(/opera|opera mini/i),
			ie: () => ua.match(/msie|iemobile/i),
			any: function () {
				return (
					this.chrome() ||
					this.edge() ||
					this.firefox() ||
					this.safari() ||
					this.opera() ||
					this.ie()
				);
			}
		};

	versionNavegador.textContent = ua;
    plataforma.textContent = isMobile.any() ? isMobile.any() : n.platform;
    navegador.textContent = isBrowser.any();
};
