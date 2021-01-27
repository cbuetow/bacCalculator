$(document).ready(
    function () {
// add event listener (clicks, etc.)
        $("#BACButton").click(calculateBAC);
// add all other functions here
        function calculateBAC()
        {
            var numBeers = $("#numBeers").val() || "0";
            numBeers = parseFloat(numBeers);

            var numWine = $("#numWine").val() || "0";
            numWine = parseFloat(numWine);

            var numShots = $("#numShots").val() || "0";
            numShots = parseFloat(numShots);

            var weight = $("#weight").val();
            weight = parseFloat(weight);

            var drinkHours = $("#drinkHours").val();
            drinkHours = parseFloat(drinkHours);

            var beer = 0.54;
            var wine = 0.6;
            var shots = 0.6;

            var alcoholConsumed = (beer * numBeers) + (wine * numWine) + (shots * numShots);
            var absorptionRate = alcoholConsumed * 7.5;
            var initialBAC = absorptionRate / weight;
            var totalBAC = initialBAC - (drinkHours * 0.015);

            $("#BACOutput").text(totalBAC.toFixed(3));
            $(".output").show();
        }
    }
);