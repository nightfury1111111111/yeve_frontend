import FilterIcon from '@src/assets/images/svg/filter-icon';
import {
  Heading,
  InputWrap,
  TokenBalance,
  TokenInfo,
  TokenList,
  TokenModalContainer,
  TokenModalForm,
  TokenItem,
  BookmarkList,
  BookmarkItem,
  TokenAddress,
} from './TokenModal.styled';
import FindIcon from '@src/assets/images/svg/find-icon';
import { TOKEN_LIST } from '@src/example-data/tokens';
import BookmarkEmpty from '@src/assets/images/svg/bookmark-empty';
import BookmarkFull from '@src/assets/images/svg/bookmark-full';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@src/assets/images/svg/close-icon';
import { useOnClickOutside } from 'usehooks-ts';
import ArrowUpRightIcon from '@src/assets/images/svg/pools/arrow-up-right-icon';

type TokenModalProps = {
  onClose: () => void;
  handleSelect: (token: Record<string, any>) => void;
};

export default function TokenModal({ onClose, handleSelect }: TokenModalProps) {
  const ref = useRef(null);

  const [bookmark, setBookmark] = useState<Record<string, any>>({});

  const handleBookMark = (
    item: Record<string, any>,
    event?: Record<string, any>
  ) => {
    if (event) {
      event.stopPropagation();
    }
    const newBookmark = JSON.parse(JSON.stringify(bookmark));
    if (item.address in bookmark) {
      delete newBookmark[item.address];
      setBookmark(newBookmark);
    } else {
      setBookmark({ ...newBookmark, [item.address]: item });
    }
  };

  const handleClose = () => {
    document.body.style.overflow = 'unset';
    onClose();
  };

  const handleSelectToken = (item: Record<string, any>) => {
    handleSelect(item);
    handleClose();
  };

  useOnClickOutside(ref, () => {
    handleClose();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <TokenModalContainer>
      <TokenModalForm ref={ref}>
        <Heading onClick={handleClose}>
          <FilterIcon />
          <span>Back to swap</span>
        </Heading>
        <InputWrap>
          <FindIcon />
          <input placeholder="Search by name or paste address" />
        </InputWrap>
        {Object.values(bookmark).length > 0 && (
          <BookmarkList>
            {Object.values(bookmark).map((item) => (
              <BookmarkItem key={item.address}>
                <img src={item.image} />
                <span>{item.symbol}</span>
                <div onClick={() => handleBookMark(item)}>
                  <CloseIcon />
                </div>
              </BookmarkItem>
            ))}
          </BookmarkList>
        )}

        <TokenList>
          {Object.values(TOKEN_LIST).map((item, index) => (
            <TokenItem key={index} onClick={() => handleSelectToken(item)}>
              <div>
                <img src={item.logoURI} />
                <TokenInfo>
                  <div>{item.name}</div>
                  <span>{item.symbol}</span>
                </TokenInfo>
              </div>
              <TokenAddress>
                <div>
                  <span>{item.address}</span>
                  <ArrowUpRightIcon />
                </div>
              </TokenAddress>
              <div>
                {/* <TokenBalance>{item.balance}</TokenBalance> */}
                <div
                  onClick={(event: Record<string, any>) =>
                    handleBookMark(item, event)
                  }
                >
                  {bookmark[item.address] ? (
                    <BookmarkFull />
                  ) : (
                    <BookmarkEmpty />
                  )}
                </div>
              </div>
            </TokenItem>
          ))}
        </TokenList>
      </TokenModalForm>
    </TokenModalContainer>
  );
}
