<?php
use Jenssegers\Mongodb\Model as Eloquent;

class Product extends Eloquent {
	protected $fillable = [];
	protected $table = 'products';
}