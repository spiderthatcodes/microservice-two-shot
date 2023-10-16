# Wardrobify

Team:

* Jessica Dickerson - Shoes
* Person 2 - Which microservice?

## Design

## Shoes microservice

### Models
* Shoes - The primary model for the shoe microservice. It saves manufacturer, model name, color, and an image. It has a foreign ket to the BinVO model.
* BinVO - This model holds import_href and closet_name, which are values received through the polling function from wardrobe. Poller.py calls the endpoint to get all bins, then loops through the response and creates a BinVO for each of the bins. This function runs every 60 seconds, so any time a new bin is created, a corresponding BinVO is also made.

### Endpoints
* shoes/ - uses the api_list_shoes function to return all of the shoes in the database
* bins/<int:bin_vo_id>/shoes/ - uses the api_list_shoes function to either return a list of shoes filter by bin or to create a new shoe
* shoes/<int:id>/ - deletes a shoe by id

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
