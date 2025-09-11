import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

  // REMOVE everything else from the body except resume-preview
  await page.evaluate(() => {
    const resume = document.getElementById('resume-preview');
    document.body.innerHTML = '';
    document.body.appendChild(resume);
  });

  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.3in',
      right: '0.3in',
      bottom: '0.3in',
      left: '0.3in',
    }
  });

  await browser.close();
})();