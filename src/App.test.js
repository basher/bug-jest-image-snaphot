import React from 'react';
import { shallow } from 'enzyme';
import puppeteer from 'puppeteer';

import App from './App';

describe('App.js', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	describe('Rendering', () => {
		it('renders without crashing', () => {
			wrapper;
		});

		it('renders correctly (snapshot)', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});
});

/* Uncomment code below to see "jest-image-snapshot" fail to run inside CRA... */

// describe('image-snapshot', () => {
// 	let browser;
// 	let page;

// 	beforeEach(async () => {
// 		browser = await puppeteer.launch();
// 		page = await browser.newPage();
// 		page.setViewport({ width: 1024, height: 768 });
// 	});

// 	afterEach(async () => {
// 		await browser.close();
// 	});

// 	it('renders correctly', async done => {
// 		try {
// 			await page.goto('http://localhost:3000', { waitUntil: 'load' });

// 			const image = await page.screenshot();
// 			expect(image).toMatchImageSnapshot();
// 			done();
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	});
// });
