
"use strict";

describe('Naviagating to Build.com', function () {

    // Elements can be imported from a Property File

    it('Page Redirection', function () {

        browser.ignoreSynchronization = true;

        browser.waitForAngularEnabled(false);

        //Navigating to the Home Page

        browser.get("http://www.build.com");

        if (browser.getTitle() != 'Pardon Our Interruption ') {

            browser.sleep(10000);

            // Closing the PopUp Window

            element(by.xpath("//*[@id='email-subscribe-splash']/div/div/div[1]/button/span[1]")).click();

            // Adding the Products to Cart and validate

            var input = element(by.xpath("//*[@id='search_txt']"));

            input.sendKeys('Suede Kohler K-6626-6U');

            input.submit();

            browser.manage().timeouts().implicitlyWait(4000);

            var productheading = element(by.xpath('//*[@id="heading"]')).getText();

            expect(productheading).toEqual('Kohler k-6626-6U-0');

            browser.manage().timeouts().implicitlyWait(4000);



            var product1 = element(by.xpath('//*[@id="product"]/div[4]/div[2]/div[3]/div[1]/div[2]/div[2]/div/ul/li[14]/div/img'));

            product1.click();

            browser.manage().timeouts().implicitlyWait(4000);



            var addToCart = element(by.xpath('//*[@id="configure-product-wrap"]/button'));

            addToCart.click();

            browser.manage().timeouts().implicitlyWait(4000);



            input.sendKeys('Cashmere Kohler K-6626-6U');

            input.submit();

            browser.manage().timeouts().implicitlyWait(4000);



            expect(productheading).toEqual('Kohler k-6626-6U-0');

            var product2 = element(by.xpath('//*[@id="product"]/div[4]/div[2]/div[3]/div[1]/div[2]/div[2]/div/ul/li[7]/div/img'));

            product2.click();

            browser.manage().timeouts().implicitlyWait(4000);



            addToCart.click();

            browser.manage().timeouts().implicitlyWait(4000);

            input.sendKeys('Kohler K-5180');

            input.submit();

            browser.manage().timeouts().implicitlyWait(4000);



            expect(productheading).toEqual('Kohler K-5180-ST');

            var product3 = element(by.xpath('//*[@id="product"]/div[4]/div[2]/div[3]/div[1]/div[2]/div[2]/div/ul/li/div/img'));

            product3.click();

            addToCart.click();

            browser.manage().timeouts().implicitlyWait(4000);



            // Redirecting to the Cart

            var cart = element(by.xpath('//*[@id="header"]/section[2]/div/div/div/a[2]/button/div/span'));

            cart.click();

            browser.manage().timeouts().implicitlyWait(4000);

            //Validating the items added in the card

            var p1 = element(by.xpath("//span[contains(text(),'Langlade 13-1/2')]")); // Rack

            var p2 = element(by.xpath("//li[contains(text(),'Color/Finish: Suede')]")); // Suedo

            var p3 = element(by.xpath("//li[contains(text(),'Color/Finish: Cashmere')]")); //

            expect(p1.getText()).toEqual('Langlade 13-1/2" x 15-1/4" Stainless Steel Right Basin Bottom Sink Rack');

            expect(p2.getText()).toEqual('Color/Finish: Cashmere');

            expect(p3.getText()).toEqual('Color/Finish: Suede');

            browser.manage().timeouts().implicitlyWait(4000);

            //Adding CA zipcode

            var zip = element(by.xpath('//*[@id="zip-code-form"]/div/input'));

            zip.sendKeys('95926');

            browser.manage().timeouts().implicitlyWait(4000);

            //Tax Validation at Checkout

            var subtotal = element(by.xpath('//*[@id="cart-sub-total"]'));

            var taxvalidator = element(by.xpath('//*[@id="cart-tax-total"]'));

            var taxtotal = subtotal.getText() * 0.0725;

            console.log(taxtotal);

            expect(taxvalidator.getText()).toEqual(taxtotal);

            browser.manage().timeouts().implicitlyWait(4000);



            //Navigating to the checkout Flow

            var checkout = element(by.xpath('//*[@id="page-content"]/div[1]/div[1]/div/section[2]/div/div[2]/div[2]/div[3]/div/a'));

            checkout.click();

            browser.manage().timeouts().implicitlyWait(4000);



            //Continuing checkout flow as a guest

            var gcheck = element(by.xpath('//*[@id="guest-login"]/button'));

            gcheck.click();

            browser.manage().timeouts().implicitlyWait(4000);

            //Landed on Shipping & Payment Page and Filling in the required information



            var shippingpayment = element(by.xpath('//*[@id="pageTitle"]/h1'));

            expect(shippingpayment.getText()).toEqual('Shipping and Payment Information ');

            element(by.xpath('//*[@id="shippingfirstname"]')).sendKeys('build');

            element(by.xpath('//*[@id="shippinglastname"]')).sendKeys('com');

            element(by.xpath('//*[@id="shippingaddress1"]')).sendKeys('402 Otterson Dr');

            element(by.xpath('//*[@id="shippingpostalcode"]')).sendKeys('95926');

            element(by.xpath('//*[@id="shippingcity"]')).sendKeys('Chico');

            element(by.xpath('//*[@id="shippingphonenumber"]')).sendKeys('6179852017');

            element(by.xpath('//*[@id="emailAddress"]')).sendKeys('example@gmail.com');

            element(by.xpath('//*[@id="creditCardNumber"]')).sendKeys('4111111111111111');

            element(by.css('#creditCardMonth option:nth-child(5)')).click();

            element(by.css('#creditCardYear option:nth-child(4)')).click();

            element(by.css('#creditcardname')).sendKeys('build com test');

            element(by.css('#creditCardCVV2')).sendKeys('850');

            element(by.css('#creditcard > div:nth-child(6) > input')).click();

            browser.manage().timeouts().implicitlyWait(4000);



            //Navigating to Shipping and Delivery Page

            var review = element(by.css('#checkout > header > h1')).getText();

            expect(review).toEqual('Review & Delivery');

            // Second Validation of the Tax

            var subtt = element(by.xpath('//*[@id="subtotalamount"]')).getText();

            var rtax = element(by.xpath('//*[@id="taxAmount"]')).getText();

            var gtotal = element(by.xpath('//*[@id="grandtotalamount"]')).getText();

            expect(subtt * 0.0725).toEqual(rtax);

            expect(gtotal).toEqual(subtt + rtax);

        }

        else {

            console.log('Pardon Our Interruption Page');

            browser.sleep(50000);

        }

    });

});

