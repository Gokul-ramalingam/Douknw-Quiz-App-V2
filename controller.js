const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 9000;

