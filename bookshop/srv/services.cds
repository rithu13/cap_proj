
using { cuid ,managed} from '@sap/cds/common';

service bookshop
{
    entity Books:cuid,managed {
              
    }
    entity Author{
        name:String
    }
}