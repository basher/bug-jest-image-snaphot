import puppeteer from 'puppeteer';

describe('image-snapshot', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({ headless: false });
		page = await browser.newPage();
		page.setViewport({ width: 1024, height: 768 });
	});

	afterEach(async () => {
		await browser.close();
	});

	it('renders correctly', async done => {
		try {
			await page.goto('http://localhost:3000', { waitUntil: 'load' });

			const image = await page.screenshot();
			expect(image).toMatchImageSnapshot();
			done();
		} catch (err) {
			console.log(err);
		}
	});
});
