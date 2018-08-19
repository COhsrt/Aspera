package transaction

import (
	"encoding/binary"

	"gopkg.in/restruct.v1"
)

type DgsListingTransaction struct {
	NumName        uint16 `struct:"uint16,sizeof=Name"`
	Name           []byte
	NumDescription uint16 `struct:"uint16,sizeof=Description"`
	Description    []byte
	NumTags        uint16 `struct:"uint16,sizeof=Tags"`
	Tags           []byte
	Quantity       uint32
	PriceNQT       uint64
}

func DgsListingTransactionFromBytes(bs []byte) (Attachment, int, error) {
	var tx DgsListingTransaction
	err := restruct.Unpack(bs, binary.LittleEndian, &tx)
	return &tx, 2 + len(tx.Name) + 2 + len(tx.Description) + 2 + len(tx.Tags) + 4 + 8, err
}
