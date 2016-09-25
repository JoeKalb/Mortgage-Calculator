// monthly interest rate       
//monthlyInterestRate = (interestRate / 100) / period          

// number of payments
//numberOfPayments = loanTerm * period

// compounded interest rate
//compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  

// interest quotient
//interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)

// final calculation
//monthlyPayment = loanBalance * interestQuotient;

$("select").append( $('<option/>').val(12).html("Monthly"));
$("select").append( $('<option/>').val(6).html("Bimonthly"));

// creating the button
$("button").click(function(){
	var loanBalance = $("#loan").val();
	var interestRate = $("#rate").val();
	var loanTerm = $("#term").val();
	var period = $("select option:selected").val();
	var monthlyInterestRate = (interestRate / 100) / period;
	var numberOfPayments = loanTerm * period;
	var compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient  = (monthlyInterestRate * compoundedIntestRate) / (compoundedIntestRate - 1);
	var monthlyPayment = loanBalance * interestQuotient;
	$("p").html("Interest Rate: " + interestRate + "%"
		+ "<br/>Number of Payments: " + numberOfPayments
		+ "<br/>Monthly Payment: $ " + monthlyPayment.toFixed(2));
});

