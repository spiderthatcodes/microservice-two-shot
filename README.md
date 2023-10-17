# Wardrobify

Team:
* Jessica Dickerson - Shoes
* Ian Norstad - Hats

## Design

## Shoes microservice

### Models
* Shoes - The primary model for the shoe microservice. It saves manufacturer, model name, color, and an image. It has a foreign key to the BinVO model.

* BinVO - This model holds import_href and closet_name, which are values received through the polling function from wardrobe. Poller.py calls the endpoint to get all bins, then loops through the response and creates a BinVO for each of the bins. This function runs every 60 seconds, so any time a new bin is created, a corresponding BinVO is also made.

## Hats microservice

### Models
* Hats - The primary model for the hat microseervice. It saves the hat style, color, fabric, and image. The Hat model has a foreign key to Location (found in the wardrobe project) called Location VO.

* LocationVO: This model holds the import_href and closet_name. Poller.py calls the endpoint to get all locations, then loops through the response and creates a LocationVO for each of them. This function runs every 60 seconds, so any time a new location is added a corresponding LocationVO is created.

## Endpoints

#### Shoes
* shoes/ - uses the api_list_shoes function to return all of the shoes in the database
* bins/<int:bin_vo_id>/shoes/ - uses the api_list_shoes function to either return a list of shoes filtered by bin or to create a new shoe
* shoes/<int:id>/ - deletes a shoe by id

#### Hats
* hats/ - uses the api_list_hats function to return all of the hats in the database
* locations/<int:location_vo_id>/hats/ - uses the api_list_hats function to either return a list of hats filtered by location or to create a new hat
* hats/<int:id>/ - deletes a hat by id

